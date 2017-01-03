using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using Xamarin.Forms;

using DevDaysSpeakers.Model;
using DevDaysSpeakers.ViewModel;


namespace DevDaysSpeakers.View
{
    public partial class UsersPage : ContentPage
    {
        UsersViewModel vm;
        public UsersPage()
        {
            InitializeComponent();

            //Create the view model and set as binding context
            vm = new UsersViewModel();
            BindingContext = vm;
        }

       
    }
}
