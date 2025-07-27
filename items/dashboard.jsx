'use client';

import { useUser } from '@clerk/nextjs';

export default function Dashboard() {
    const { isLoaded, user } = useUser();
    console.log(user.fullName)
    if (!isLoaded) {
        return <div className="h-12 w-12 rounded-full bg-gray-200 animate-pulse" />;
    }

    if (!user) {
        return null; // or a placeholder avatar
    }

    return (
        <img
            src={user}
            alt={user.fullName ?? 'User avatar'}
            className="h-12 w-12 rounded-full object-cover"
        />
    );
}
