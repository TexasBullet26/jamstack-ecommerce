/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// Configures our gatsby (client) project to recognize our amplify (backend) project
import Amplify from 'aws-amplify'
import config from './src/aws-exports'

import './src/styles/site.css'
import './src/layouts/layout.css'

Amplify.configure(config)
