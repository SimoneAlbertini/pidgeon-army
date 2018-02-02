require 'sinatra/base'
require 'sinatra/activerecord'

class App < Sinatra::Application
  register Sinatra::ActiveRecordExtension

  set :root, Proc.new { File.expand_path File.join(File.dirname(__FILE__), '..') }
  set :public_folder, Proc.new { File.join(root, 'public') }
  set :views, Proc.new { File.join(root, 'views') }

  get '/' do
    erb :homepage
  end

  get '/api/contact-list' do
    content_type 'application/json'
    [
        {first_name: 'name1', last_name: 'last1', email: 'email1@email.com'},
        {first_name: 'name2', last_name: 'last2', email: 'email2@email.com'}
    ].to_json
  end
end
