"use client";

import { useEffect, useRef } from 'react';
import { Capacitor } from '@capacitor/core';
import {
  AppUpdate,
  AppUpdateAvailability,
  FlexibleUpdateInstallStatus,
} from '@capawesome/capacitor-app-update';

export default function AppUpdateChecker() {
  const hasCheckedRef = useRef(false);

  useEffect(() => {
    // Only execute on native Android devices
    if (!Capacitor.isNativePlatform() || Capacitor.getPlatform() !== 'android') {
      return;
    }

    if (hasCheckedRef.current) return;
    hasCheckedRef.current = true;

    let listenerHandle: { remove: () => void } | null = null;

    const checkUpdates = async () => {
      try {
        const info = await AppUpdate.getAppUpdateInfo();

        // 1. If an update was previously downloaded in the background, complete and restart
        if (info.installStatus === FlexibleUpdateInstallStatus.DOWNLOADED) {
          console.log('[AppUpdate] Update previously downloaded. Completing update...');
          await AppUpdate.completeFlexibleUpdate();
          return;
        }

        // 2. If a new update is available on Google Play
        if (info.updateAvailability === AppUpdateAvailability.UPDATE_AVAILABLE) {
          console.log(
            `[AppUpdate] New update available: ${info.availableVersionName || info.availableVersionCode} (current: ${info.currentVersionName})`
          );

          if (info.immediateUpdateAllowed) {
            // Immediate update: displays Google Play's official full-screen update sheet
            console.log('[AppUpdate] Starting immediate update...');
            await AppUpdate.performImmediateUpdate();
          } else if (info.flexibleUpdateAllowed) {
            // Flexible update: silently downloads in the background, then prompts to restart
            console.log('[AppUpdate] Starting flexible background update...');
            listenerHandle = await AppUpdate.addListener(
              'onFlexibleUpdateStateChange',
              async (state) => {
                if (state.installStatus === FlexibleUpdateInstallStatus.DOWNLOADED) {
                  console.log('[AppUpdate] Flexible update downloaded. Applying...');
                  await AppUpdate.completeFlexibleUpdate();
                }
              }
            );
            await AppUpdate.startFlexibleUpdate();
          }
        }
      } catch (err) {
        // Silently catch errors (e.g. sideloaded APK, missing Play Store services)
        console.warn('[AppUpdate] In-app update check skipped or unavailable:', err);
      }
    };

    // Small delay to allow the main UI to render first
    const timer = setTimeout(() => {
      checkUpdates();
    }, 1500);

    return () => {
      clearTimeout(timer);
      if (listenerHandle) {
        listenerHandle.remove();
      }
    };
  }, []);

  return null;
}
