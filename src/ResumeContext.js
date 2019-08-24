import React from 'react';

const ResumeContext = React.createContext(null);

export const ResumeProvider = ResumeContext.Provider;
export const ResumeConsumer = ResumeContext.Consumer;

export default ResumeContext;
