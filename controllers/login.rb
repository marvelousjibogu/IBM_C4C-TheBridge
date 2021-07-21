get '/login-page' do
  # checks if the user is logged in
  #@logged_in = session[:logged_in]
  
  # Redirecting to login page unless the user is logged in
  # admins will get redirected from the login page automatically
  #redirect '/my-profile-page' if @logged_in 
    
  # Creates a temporary user
  #@user = Mentee.new

  erb :"login-page"
end