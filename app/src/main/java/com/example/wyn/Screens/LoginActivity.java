package com.example.wyn.Screens;

import android.content.Intent;
import android.os.Bundle;
import android.widget.Button;
import android.widget.TextView;
import androidx.appcompat.app.AppCompatActivity;
import com.example.wyn.R;

public class LoginActivity extends AppCompatActivity {

    private Button btnLogin;
    private TextView tvCriarConta;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_login);
        setTitle("Login");

        btnLogin = findViewById(R.id.btnLogin);
        tvCriarConta = findViewById(R.id.tvCriarConta);

        btnLogin.setOnClickListener(v -> {
            startActivity(new Intent(LoginActivity.this, HomeActivity.class));
        });

        tvCriarConta.setOnClickListener(v -> {
            startActivity(new Intent(LoginActivity.this, RegisterActivity.class));
        });
    }
}
