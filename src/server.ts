import app from './shared/infra/http/app';
import { PORT } from './shared/utils/env';

// app.get('/', (req, res) => {
//   res.send(`url-shortener v1.0.0`);
// });

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
