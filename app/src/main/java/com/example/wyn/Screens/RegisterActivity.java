package com.example.wyn.Screens;

import android.os.Bundle;
import android.widget.Button;
import android.widget.Toast;
import androidx.appcompat.app.AppCompatActivity;
import com.example.wyn.R;

public class RegisterActivity extends AppCompatActivity {

    private Button btnRegister;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_register);
        setTitle("Cadastro");

        btnRegister = findViewById(R.id.btnRegister);
        btnRegister.setOnClickListener(view ->
                Toast.makeText(this, "Cadastro Simulado!", Toast.LENGTH_SHORT).show());
    }
}
