describe 'Pidgeon Army App', type: :feature do

  it 'should display homepage' do
     visit '/hello/my_friend'
     expect(page.status_code).to be 200
     expect(page).to have_content 'Hello, my_friend!'
  end
end