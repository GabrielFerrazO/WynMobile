package com.example.wyn.Screens;

import android.content.Intent;
import android.os.Bundle;
import android.widget.Button;
import android.widget.TextView;
import androidx.appcompat.app.AppCompatActivity;
import com.example.wyn.R;

public class ServiceListActivity extends AppCompatActivity {

    private TextView txtCategoria;
    private Button btnVerDetalhes;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_service_list);

        String categoria = getIntent().getStringExtra("categoria");

        txtCategoria = findViewById(R.id.txtCategoria);
        btnVerDetalhes = findViewById(R.id.btnVerDetalhes);

        txtCategoria.setText("Serviços de " + categoria);
        setTitle("Serviços - " + categoria);

        btnVerDetalhes.setOnClickListener(v ->
                startActivity(new Intent(this, ServiceDetailActivity.class)));
    }
}
