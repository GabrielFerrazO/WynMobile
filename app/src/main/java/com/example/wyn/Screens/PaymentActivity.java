package com.example.wyn.Screens;

import android.os.Bundle;
import android.widget.Button;
import android.widget.Toast;
import androidx.appcompat.app.AppCompatActivity;
import com.example.wyn.R;

public class PaymentActivity extends AppCompatActivity {

    private Button btnPix, btnCartao;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_payment);
        setTitle("Pagamento");

        btnPix = findViewById(R.id.btnPix);
        btnCartao = findViewById(R.id.btnCartao);

        btnPix.setOnClickListener(v ->
                Toast.makeText(this, "Pagamento via Pix realizado!", Toast.LENGTH_SHORT).show());

        btnCartao.setOnClickListener(v ->
                Toast.makeText(this, "Pagamento via Cartão realizado!", Toast.LENGTH_SHORT).show());
    }
}
