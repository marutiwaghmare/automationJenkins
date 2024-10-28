Feature: Verify scenarios

        Background: Launching URL

                Given Launch URL and verify

        Scenario: : Register new user
         When User should click sign up login button
         When User should enter name as "Example8" and email as "exampletest08@gmail.com" and click on sign up button
         When User should register form
         Then I should see a success message
         When user should scroll down the page and last third product add to cart and verify message and continue


