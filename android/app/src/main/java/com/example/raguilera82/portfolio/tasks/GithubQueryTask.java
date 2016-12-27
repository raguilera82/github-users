package com.example.raguilera82.portfolio.tasks;

import android.content.Context;
import android.os.AsyncTask;
import android.util.Log;
import android.widget.ListView;

import com.example.raguilera82.portfolio.NetworkUtils;
import com.example.raguilera82.portfolio.adapters.UsersAdapter;
import com.example.raguilera82.portfolio.model.User;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.io.IOException;
import java.net.URL;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by raguilera82 on 27/12/2016.
 */

public class GithubQueryTask extends AsyncTask<URL, Void, String> {

    Context context;
    ListView listView;

    public GithubQueryTask(Context context, ListView listView) {
        this.context = context;
        this.listView = listView;
    }

    @Override
    protected String doInBackground(URL... objects) {
        URL searchUrl = objects[0];
        String results = null;
        try {
            results = NetworkUtils.getInstance().getResponse(searchUrl);
        } catch (IOException e) {
            e.printStackTrace();
        }
        return results;
    }

    @Override
    protected void onPostExecute(String s) {
        if (s != null && !s.equals("")){
            Log.d("response", s);
            try {
                JSONArray usersObj = new JSONArray(s);
                Log.d("debug", usersObj.getString(0));
                List<User> users = new ArrayList<User>();
                for(int i=0;i<usersObj.length();i++){
                    JSONObject userObject = (JSONObject) usersObj.get(i);
                    String login = userObject.getString("login");
                    String avatarUrl = userObject.getString("avatar_url");
                    User user = new User(login, avatarUrl);
                    users.add(user);
                }
                listView.setAdapter(new UsersAdapter(context, users));
            } catch (JSONException e) {
                e.printStackTrace();
            }
        }
    }
}