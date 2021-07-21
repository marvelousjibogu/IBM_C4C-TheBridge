# frozen_string_literal: true

# Gems
require 'sinatra'
require 'sinatra/reloader'
require 'require_all'

# For Codio
set :bind, '0.0.0.0'

# Sessions
enable :sessions
set :session_secret, "$g]Rd2M/WbJ`~~<GZWdH@Fm'ESk2_gckCtLJJkySYG"

# So we can escape HTML special characters in the view
include ERB::Util

# Database
require_relative 'db/db'

# App
require_all 'models'
require_all 'controllers'
#require_all 'helpers'

#
if (ENV['APP_ENV'] == 'test')
    puts "The app is in test db mode"
else
    puts "The app is in production db mode"
end