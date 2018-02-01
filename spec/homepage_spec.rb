describe 'Pidgeon Army App', type: :feature do

  it 'should display homepage' do
    setup_javascript_test
    visit '/'
    expect(page.status_code).to be 200
    expect(page).to have_content 'Gestione contatti'
    expect(page).to have_selector '#add_contact_form'
    expect(page).to have_selector '#contacts_table'
  end
end