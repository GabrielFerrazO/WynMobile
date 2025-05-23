package com.example.wyn.Screens;

import android.os.Bundle;
import android.widget.Button;
import android.widget.RatingBar;
import android.widget.Toast;
import androidx.appcompat.app.AppCompatActivity;
import com.example.wyn.R;

public class ReviewActivity extends AppCompatActivity {

    private RatingBar ratingBar;
    private Button btnEnviar;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_review);
        setTitle("Avaliar Serviço");

        ratingBar = findViewById(R.id.ratingBar);
        btnEnviar = findViewById(R.id.btnEnviarReview);

        btnEnviar.setOnClickListener(v -> {
            float rating = ratingBar.getRating();
            Toast.makeText(this, "Avaliação enviada: " + rating + " estrelas", Toast.LENGTH_SHORT).show();
        });
    }
}
