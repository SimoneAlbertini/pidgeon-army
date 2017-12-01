require 'sinatra/base'
require 'sinatra/activerecord'

class App < Sinatra::Application
  register Sinatra::ActiveRecordExtension

  set :root, Proc.new { File.expand_path File.join(File.dirname(__FILE__), '..') }
  set :public_folder, Proc.new { File.join(root, 'public') }
  set :views, Proc.new { File.join(root, 'views') }

  get '/hello/:name' do |name|
    erb :hello, :locals => {:name => name}
  end
end
