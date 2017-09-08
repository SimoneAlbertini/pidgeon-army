require 'sinatra/base'
require 'sinatra/activerecord'

class App < Sinatra::Application
  register Sinatra::ActiveRecordExtension
  register React::Sinatra

  set :root, Proc.new { File.expand_path File.join(File.dirname(__FILE__), '..') }
  set :public_folder, Proc.new { File.join(root, 'public') }
  set :views, Proc.new { File.join(root, 'views') }

  configure do
    React::Sinatra.configure do |config|
      config.use_bundled_react = true
      config.env = ENV['RACK_ENV'] || :development
      config.asset_path = File.join('react', 'dist', 'bundle.js')
      config.use_bundled_react = true
      config.runtime = :execjs
    end
  end

  get '/hello/:name' do |name|
    erb :hello, :locals => {:name => name}
  end
end
