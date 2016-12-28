package com.example.raguilera82.portfolio.adapters;

import android.content.Context;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ArrayAdapter;
import android.widget.ImageView;
import android.widget.TextView;

import com.example.raguilera82.portfolio.R;
import com.example.raguilera82.portfolio.model.User;
import com.example.raguilera82.portfolio.tasks.ImageLoadTask;

import java.util.List;

/**
 * Created by raguilera82 on 27/12/2016.
 */

public class UsersAdapter extends ArrayAdapter<User> {

    private final Context context;
    private final List<User> values;

    public UsersAdapter(Context context, List<User> values) {
        super(context, R.layout.list_mobile, values);
        this.context = context;
        this.values = values;
    }

    @Override
    public View getView(int position, View convertView, ViewGroup parent) {
        LayoutInflater inflater = (LayoutInflater) context
                .getSystemService(Context.LAYOUT_INFLATER_SERVICE);

        View rowView = inflater.inflate(R.layout.list_mobile, parent, false);
        TextView loginText = (TextView) rowView.findViewById(R.id.login);
        loginText.setText(values.get(position).getLogin());
        ImageView imageView = (ImageView) rowView.findViewById(R.id.logo);

        Log.d("console", "Login: " + loginText.getText());


        new ImageLoadTask(values.get(position).getAvatarUrl(), imageView).execute();

        return rowView;
    }


}
