import * as dotenv from 'dotenv';

dotenv.config();

export default () => ({
  PORT: parseInt(process.env.PORT || '', 10) || 3000,
});
