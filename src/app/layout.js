import Container from './Container';
import './global.css'

export const metadata = {
  title: "Todo App",
  description: "A Todo List Application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* <Providers> */}
        <Container>
          <div>
            {children}
          </div>
        </Container>
        {/* </Providers> */}
      </body>
    </html>
  );
}
