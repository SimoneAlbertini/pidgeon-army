require 'rake'
require 'sinatra/activerecord/rake'

begin
  require 'rspec/core/rake_task'

  RSpec::Core::RakeTask.new(:spec) do |t|
    t.pattern = Dir.glob('spec/**/*_spec.rb')
    t.rspec_opts = '--format documentation'
  end
rescue LoadError
end

desc 'run a pry console with the project environment loaded'
task :console do
  require 'pry'
  puts '-- Project Console --'
  Dir.chdir('lib')
  system 'pry -I . -I ../ -r environment.rb'
end

task :work, [:option, :foo, :bar] => [:environment] do |t, args|
  puts "work", args
end

namespace :webpack do
  desc 'react assets DEVELOPMENT build'
  task :dev do
    fail unless system('cd react; webpack')
  end

  desc 'react assets PRODUCTION build'
  task :production do
    fail unless system('cd react; webpack -p')
  end
end

namespace :db do
  task :load_config do
    require './lib/environment'
  end

  # I Don't want to mess with current environment so I use a different rake process
  namespace :test do
    desc 'Setup the DB test environment (create and migrate)'
    task :setup do
      fail unless system('RACK_ENV=test rake db:create') and
                  system('RACK_ENV=test rake db:migrate')
    end
  end
end

desc 'Run Jest tests for React Components'
task :jest_tests do
  fail unless system('cd react; npm test')
end

desc 'Run all the tests'
task :test => [:'db:test:setup', :'webpack:dev', :jest_tests, :spec]