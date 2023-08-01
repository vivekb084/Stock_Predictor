import * as dotenv from 'dotenv'

dotenv.config()

export const EnvVar = {
    X_RapidAPI_Key  :  process.env.X_RapidAPI_Key,
    X_RapidAPI_Host :  process.env.X_RapidAPI_Host,
    PORT            :  process.env.PORT,
    SSL_ENABLED     :  process.env.SSL_ENABLED   ||    '',
    SSLKEYFILE      :  process.env.SSLKEYFILE    ||    '',
    SSLCRTFILE      :  process.env.SSLCRTFILE    ||    ''
}
