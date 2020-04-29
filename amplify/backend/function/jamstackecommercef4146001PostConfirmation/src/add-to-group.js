/* eslint-disable-line */ const aws = require('aws-sdk')

/**
 * This function will add a user to the Admin group if
 * their email is included in the `adminEmails` array
 * @param event
 * @param context
 * @param callback
 */
exports.handler = async (event, context, callback) => {
  const cognitoidentityserviceprovider = new aws.CognitoIdentityServiceProvider(
    { apiVersion: '2016-04-18' }
  )

  // Array of Admin emails you would like to use
  let adminEmails = ['lanzertrey@gmail.com'],
    isAdmin = false

  if (adminEmails.indexOf(event.request.userAttributes.email) !== -1) {
    isAdmin = true
  }

  if (isAdmin) {
    const groupParams = {
      GroupName: process.env.GROUP,
      UserPoolId: event.userPoolId,
    }

    const addUserParams = {
      ...groupParams,
      Username: event.userName,
    }

    try {
      await cognitoidentityserviceprovider.getGroup(groupParams).promise()
    } catch (e) {
      await cognitoidentityserviceprovider.createGroup(groupParams).promise()
    }

    try {
      await cognitoidentityserviceprovider
        .adminAddUserToGroup(addUserParams)
        .promise()
      callback(null, event)
    } catch (e) {
      callback(e)
    }
  } else {
    callback(null, event)
  }
}
