Feature: Test

Scenario: simple search in google
    Given browser is up and redirected to "http://www.google.com"
    When user writes "free website" in search bar
    Then verify list of sites is presented below