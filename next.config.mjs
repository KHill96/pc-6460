/** @type {import('next').NextConfig} */
const nextConfig = {
    images:
        {
            remotePatterns: [{
                protocol: 'https',
                hostname:'*.supabase.co',
                port:''
            },
            {
                protocol:'https',
                hostname:'us-east-1-shared-usea1-02.graphassets.com',
                port:''
                
            }
        ]
    }
};

export default nextConfig;
