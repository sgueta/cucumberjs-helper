Feature: Test

Scenario: simple calculation test
    Given variable "a" equals to "1"
    When we add "2" to "a"
    Then verify "a" equals to "3"