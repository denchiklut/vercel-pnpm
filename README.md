This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Steps to reproduce

```shell
pnpm i
cd apps/web

vercel link --token=$VERCEL_API_TOKEN --scope petsmartcoms-projects --project edge-config --yes
vercel pull --token=$VERCEL_API_TOKEN --scope petsmartcoms-projects --environment=$ENVIRONMENT --yes
vercel build --token=$VERCEL_API_TOKEN --scope petsmartcoms-projects --target=$ENVIRONMENT
vercel deploy --token=$VERCEL_API_TOKEN --scope petsmartcoms-projects --target=$ENVIRONMENT --prebuilt --debug
```

## Actual Behavior 
#### Deploy fails with:

```
Error: ENOENT: no such file or directory, lstat '/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/next-server.js'
```

### Expected Behavior
vercel deploy --prebuilt should upload and run the build output without missing Next.js runtime files.

### Workaround
If we opt out of PNPM workspaces for this app (install all deps directly in apps/web using Yarn), the deploy succeeds.