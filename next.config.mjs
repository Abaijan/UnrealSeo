/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/',
                destination: '/main',
                permanent: true,
            },

        ];
    },
    images: {

                remotePatterns: [
                    {
                        protocol: 'http',
                        hostname: 'apoi.unreal.kg',
                        port: '', // Оставьте пустым, если порт по умолчанию
                        pathname: '/**/*' // Это позволяет подгружать все изображения с этого домена
                    },
                    {
                        protocol: 'http',
                        hostname: 'api.unreal.kg',
                        port: '',
                        pathname: '/**/*'
                    }
                ],

    },
};

export default nextConfig;

