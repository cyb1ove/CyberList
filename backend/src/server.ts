import app from './app';
import init from './dbInit'

const PORT = process.env.PORT || 4000;

init()
  .then((db) => {
    app.listen(PORT, () => {
      console.log(db);
      console.log(`[server]: Server is running at https://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  })

