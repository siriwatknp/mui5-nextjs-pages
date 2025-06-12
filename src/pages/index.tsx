import {
  Box,
  Container,
  Typography,
  Button,
  Stack,
  Card,
  CardContent,
  Grid,
  Link,
} from "@mui/material";
import { GitHub, Language, MenuBook } from "@mui/icons-material";

export default function Home() {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          py: 8,
        }}
      >
        <Stack spacing={4} alignItems="center">
          <Typography variant="h1" component="h1" gutterBottom align="center">
            Welcome to Next.js with Material UI
          </Typography>

          <Typography
            variant="h5"
            color="text.secondary"
            align="center"
            paragraph
          >
            Get started by editing{" "}
            <Box
              component="code"
              sx={{ bgcolor: "grey.100", px: 1, py: 0.5, borderRadius: 1 }}
            >
              src/pages/index.tsx
            </Box>
          </Typography>

          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            sx={{ mt: 4 }}
          >
            <Button
              variant="contained"
              size="large"
              href="https://mui.com/"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ bgcolor: "red" }}
            >
              MUI Documentation
            </Button>
            <Button
              variant="outlined"
              size="large"
              href="https://nextjs.org/docs"
              target="_blank"
              rel="noopener noreferrer"
            >
              Next.js Documentation
            </Button>
          </Stack>

          <Grid container spacing={3} sx={{ mt: 4, maxWidth: 800 }}>
            <Grid item xs={12} sm={4}>
              <Card sx={{ height: "100%" }}>
                <CardContent>
                  <Stack spacing={2} alignItems="center" textAlign="center">
                    <MenuBook color="primary" fontSize="large" />
                    <Typography variant="h6" component="h2">
                      Documentation
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Find in-depth information about Next.js features and API.
                    </Typography>
                    <Link
                      href="https://nextjs.org/docs"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Learn more →
                    </Link>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} sm={4}>
              <Card sx={{ height: "100%" }}>
                <CardContent>
                  <Stack spacing={2} alignItems="center" textAlign="center">
                    <Language color="primary" fontSize="large" />
                    <Typography variant="h6" component="h2">
                      Examples
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Discover and deploy boilerplate example Next.js projects.
                    </Typography>
                    <Link
                      href="https://vercel.com/templates"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View examples →
                    </Link>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} sm={4}>
              <Card sx={{ height: "100%" }}>
                <CardContent>
                  <Stack spacing={2} alignItems="center" textAlign="center">
                    <GitHub color="primary" fontSize="large" />
                    <Typography variant="h6" component="h2">
                      Deploy
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Instantly deploy your Next.js site to a public URL.
                    </Typography>
                    <Link
                      href="https://vercel.com/new"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Deploy now →
                    </Link>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Stack>
      </Box>
    </Container>
  );
}
