package com.anonymous.untitledApp;

import android.content.Intent;
import android.os.Environment;
import android.provider.Settings;
import android.widget.Toast;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import java.util.HashMap;
import java.util.Map;

public class AndroidCameraModule extends ReactContextBaseJavaModule {
    private Promise promise;

    public AndroidCameraModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @ReactMethod
    public String show() {
        String imagePath = "";
        String imageName = "";
        imagePath = Environment.getExternalStorageDirectory() + "/DCIM/Camera/" + imageName + ".jpg";
        return imagePath.toString();
    }

    @ReactMethod
    public void openCamera(final Promise promise) {
        Toast.makeText(getReactApplicationContext(), "LOLZ", Toast.LENGTH_SHORT).show();
        try {
            AndroidCamera andCam = AndroidCamera.newInstance();
            andCam.setPromise(promise);
            Intent intent = new Intent(getCurrentActivity(), AndroidCamera.class);
            getCurrentActivity().startActivity(intent);
            Toast.makeText(getReactApplicationContext(), "LOLZ-Return", Toast.LENGTH_SHORT).show();
        } catch (Exception e) {
            promise.reject(e.getMessage(), e.getMessage());
        }
    }

    @NonNull
    @Override
    public String getName() {
        return "AndroidCamera";
    }

    @Override
    public Map<String, Object> getConstants() {
        final Map<String, Object> constants = new HashMap<>();
        String android_id = Settings.System.getString(getReactApplicationContext().getContentResolver(), Settings.Secure.ANDROID_ID);
        constants.put("uniqueId", android_id);
        return constants;
    }
}
