using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Diagnostics;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using Xamarin.Forms;
using DevDaysSpeakers.Model;
using DevDaysSpeakers.Services;
using System.Net.Http;
using Newtonsoft.Json;
using System.Collections.ObjectModel;
using System.Runtime.CompilerServices;

namespace DevDaysSpeakers.ViewModel
{
	public class UsersViewModel: INotifyPropertyChanged
    {
		public ObservableCollection<User> Users { get; set; }
		public Command GetUsersCommand { get; set; }

		public UsersViewModel() 
		{
			Users = new ObservableCollection<User>();
			GetUsersCommand = new Command(
				async () => await GetUsers(), () => !IsBusy);

		}

		private bool busy;

		public bool IsBusy
		{
			get
			{
				return busy;
			}

			set
			{
				busy = value;
				OnPropertyChanged();
				GetUsersCommand.ChangeCanExecute();
			}
		}

		async Task GetUsers()
		{
			if (IsBusy)
			{
				return;
			}

			Exception error = null;
			try
			{
				IsBusy = true;
				var service = DependencyService.Get<AzureService>();
				var items = await service.GetUsers();

				Users.Clear();
				foreach (var item in items)
					Users.Add(item);
			}
			catch (Exception ex)
			{
				Debug.WriteLine("Error: " + ex);
				error = ex;
			}
			finally 
			{
				IsBusy = false;
			}

			if (error != null) 
			{
				await Application.Current.MainPage.DisplayAlert("Error!", error.Message, "OK");
			}

		}

		public event PropertyChangedEventHandler PropertyChanged;

		private void OnPropertyChanged([CallerMemberName] string name = null)
		{
			var changed = PropertyChanged;

			if (changed == null)
			{
				return;
			}

			changed.Invoke(this, new PropertyChangedEventArgs(name));
		}

    }
}
