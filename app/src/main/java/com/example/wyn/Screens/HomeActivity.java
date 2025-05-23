package com.example.wyn.Screens;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import androidx.appcompat.app.AppCompatActivity;
import com.example.wyn.R;

public class HomeActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_home);
        setTitle("Escolha um Serviço");
    }

    public void abrirServico(View view) {
        String categoria = (String) view.getTag();
        Intent intent = new Intent(this, ServiceListActivity.class);
        intent.putExtra("categoria", categoria);
        startActivity(intent);
    }
}
