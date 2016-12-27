package com.example.raguilera82.portfolio;

import android.net.Uri;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.widget.ListView;

import com.example.raguilera82.portfolio.tasks.GithubQueryTask;

import java.net.MalformedURLException;
import java.net.URL;


public class MainActivity extends AppCompatActivity {

    final static String GITHUB_BASE_URL = "https://api.github.com/users";

    ListView listUsers;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        listUsers = (ListView) findViewById(R.id.listUsers);

        Uri builtUri = Uri.parse(GITHUB_BASE_URL).buildUpon().build();

        try {
            new GithubQueryTask(getApplicationContext(), listUsers).execute(new URL(builtUri.toString()));
        } catch (MalformedURLException e) {
            e.printStackTrace();
        }

    }

}
