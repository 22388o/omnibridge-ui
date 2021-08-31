import { HStack, Image, Text } from '@chakra-ui/react';
import { useCoinzillaText } from 'hooks/useCoinzillaText';
import React from 'react';
import { Link } from 'react-router-dom';

export const CoinzillaTextAd = () => {
  const { isFetching, adData, adFetchError } = useCoinzillaText();

  if (isFetching || adFetchError) return null;
  if (!adData) return null;

  const {
    ad: { thumbnail, name, title, url, cta_button: ctaButton },
  } = adData;

  return (
    <HStack
      my="4"
      justifyContent="flex-start"
      w="100%"
      display={{ base: 'none', md: 'flex' }}
    >
      <Text>Sponsored: </Text>
      <Image alt="ad-logo" src={thumbnail} w="20px" h="20px" />
      <Text fontWeight="bold">{name}</Text>
      <Text> - {title}</Text>
      <Link
        href={url}
        target="_blank"
        rel="noopener no"
        style={{ color: 'var(--chakra-colors-blue-500)', fontWeight: 'bold' }}
      >
        {ctaButton}
      </Link>
    </HStack>
  );
};
