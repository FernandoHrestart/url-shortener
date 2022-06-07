import mongoose from 'mongoose';
import { CONNECTION_URI } from '../../utils/env';

function createConnection(): void {
  mongoose.connect(`${CONNECTION_URI}`, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  });
}

createConnection();
