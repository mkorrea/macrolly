interface PageHeadProps {
  title: string
  description?: string
}

export function PageHead({title, description}: PageHeadProps) {
  const fullTitle = `${title} | macrolly`

  const defaultDescription =
  "Organize suas receitas de forma simples com o Macrolly."
  const metaDescription = description ?? defaultDescription
  
  return (
    <>
      <title>{fullTitle}</title>
      <meta property="og:title" content={fullTitle} />
      <meta property="og:type" content="website" />
      
      {metaDescription && (
        <>
          <meta name="description" content={metaDescription} />
          <meta property="og:description" content={metaDescription} />
        </>
      )}
    </>
  )
}