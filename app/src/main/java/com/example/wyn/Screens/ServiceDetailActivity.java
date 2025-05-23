package com.example.wyn.Screens;

import android.content.Intent;
import android.os.Bundle;
import android.widget.Button;
import android.widget.Toast;
import androidx.appcompat.app.AppCompatActivity;
import com.example.wyn.R;

public class ServiceDetailActivity extends AppCompatActivity {

    private Button btnChat, btnAvaliar, btnPagar;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_service_detail);
        setTitle("Detalhes do Serviço");

        // Inicializa os botões corretamente
        btnChat = findViewById(R.id.btnChat);
        btnAvaliar = findViewById(R.id.btnAvaliar);
        btnPagar = findViewById(R.id.btnPagar);

        btnChat.setOnClickListener(v ->
                startActivity(new Intent(this, ChatActivity.class))
        );

        btnAvaliar.setOnClickListener(v ->
                startActivity(new Intent(this, ReviewActivity.class))
        );

        btnPagar.setOnClickListener(v ->
                startActivity(new Intent(this, PaymentActivity.class))
        );
    }
}
