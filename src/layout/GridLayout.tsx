import React from 'react';

export default function GridLayout({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 ${className}`}>{children}</div>
    );
}
