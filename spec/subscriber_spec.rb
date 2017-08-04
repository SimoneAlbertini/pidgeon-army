require 'rspec'

describe Subscriber, :type => :model, :database => true do

  def subscriber_with(attr)
    Subscriber.new({email: 'email@email.it', first_name: 'foo', last_name: 'bar'}.merge attr)
  end

  it 'should not be valid without email and should be unique' do
    first_subscriber = subscriber_with(email: 'prova@prova.it')
    same_email_subscriber = subscriber_with(email: 'prova@prova.it')

    expect(subscriber_with(email: '')).to_not be_valid
    expect(first_subscriber).to be_valid

    first_subscriber.save!

    expect(same_email_subscriber).to_not be_valid
  end

  it 'should not be valid without first and last name' do
    expect(subscriber_with(first_name: '')).to_not be_valid
    expect(subscriber_with(last_name: '')).to_not be_valid
  end

  it 'should be valid only with actual email' do
    expect(subscriber_with(email: 'asdsad.io')).to_not be_valid
  end
end