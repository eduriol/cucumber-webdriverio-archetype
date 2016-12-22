Feature: Google Search
In order to find sites easily
As an internet user
I want to make searches in Google

#the scenario shows the response in Spanish Google version
Scenario: Results not found
    Given we enter url "https://www.google.com"
    When we search for "fbhdbhfdbgfovhrtreiusjkcndlskcjniweuvnuivevwi"
    Then the results message shows "La búsqueda de fbhdbhfdbgfovhrtreiusjkcndlskcjniweuvnuivevwi no obtuvo ningún resultado."
