import { Badge } from "@chakra-ui/react";

export default function BadgeUI({ children, ...res }: any) {
  return (
    <Badge variant="outline" color="brand.text" borderRadius="5px" p={1.5} fontWeight="600" {...res}>
      {children}
    </Badge>
  );
}
