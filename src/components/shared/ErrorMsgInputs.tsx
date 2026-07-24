const ErrorMsgInputs = ({ error }: { error?: string }) => {
  if (!error) return null;

  return (
    <p className="text-[11px] font-medium text-destructive mt-1 animate-in fade-in-50 duration-150">
      {error}
    </p>
  );
};

export default ErrorMsgInputs;
