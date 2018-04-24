package com.clubping;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;

/**
 * Created by hankins on 2018/4/24.
 */

public class CallPhoneActivity extends ReactContextBaseJavaModule {
    public CallPhoneActivity(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "ClubPing";
    }
}
