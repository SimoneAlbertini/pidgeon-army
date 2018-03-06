describe 'Pidgeon Army App', type: :feature do
  it 'serves react bundle asset' do
    visit '/react_dist/bundle.js'
    expect(page.status_code).to eq 200
    expect(page.response_headers['Content-Type']).to match /application\/javascript/
    expect(page.body).not_to be_empty
  end

  it 'should respond for contact list api request' do
    visit '/api/contact-list'
    expect(page.status_code).to eq 200
    expect(page.response_headers['Content-Type']).to match(/\/json$/)
    expect(page.body).not_to be_empty
  end

  it 'should display homepage', js: true do
    visit '/'
    expect(page).to have_content 'Gestione contatti'
    expect(page).to have_selector '#add_contact_form'
    expect(page).to have_selector '#contacts_table'
  end
end