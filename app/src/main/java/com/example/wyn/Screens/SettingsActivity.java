package com.example.wyn.Screens;

import android.os.Bundle;
import androidx.appcompat.app.AppCompatActivity;
import com.example.wyn.R;

public class SettingsActivity extends AppCompatActivity {
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_settings);
        setTitle("Configurações");
    }
}
