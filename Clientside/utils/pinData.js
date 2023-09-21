import axios from "axios";
// import { Readable } from "stream";
// import { Buffer } from "buffer";

const { VITE_PINATA_API_KEY, VITE_PINATA_SECRET_KEY } = import.meta.env;

export const pinData = async (data) => {
  try {
    const name = data.name;
    const course = data.track;
    const formData = new FormData();

    formData.append("file", data.file);

    const fileMetadata = JSON.stringify({
      name: `Certificate of Completion for ${name}`,
    });

    formData.append("pinataMetadata", fileMetadata);

    const options = JSON.stringify({
      cidVersion: 0,
    });
    formData.append("pinataOptions", options);

    // pin the nfts image to pinata
    const nftImage = await axios({
      method: "post",
      url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
      data: formData,
      headers: {
        pinata_api_key: `${VITE_PINATA_API_KEY}`,
        pinata_secret_api_key: `${VITE_PINATA_SECRET_KEY}`,
        "Content-Type": "multipart/form-data",
      },
    });

    const nftImageURL = `https://gateway.pinata.cloud/ipfs/${nftImage.data.IpfsHash}`;
    console.log(nftImageURL);

    // creating a metadata object for the NFT certificate

    const metadata = {
      name: `Certificate of Completion for ${name}`,
      description: `This is to  certify that ${name}, has completed the 2022 cohort of the Codename: Learnable Internship(Physical) following the ${course} learning path. ${name} showcased strong abilities to learn, collaborate, think, and solve real-world problems.`,
      image: nftImageURL,
      attributes: [{ trait_type: "Course", value: course }],
    };

    const metaData = new FormData();

    // convert the metadata object to a JSON string
    const metadataJSON = JSON.stringify(metadata);
    metaData.append("pinataContent", metadataJSON);
    const NftMetadata = JSON.stringify({
      name: `Metadata for ${nftImage.IpfsHash}`,
    });

    metaData.append("pinataMetadata", NftMetadata);

    const options1 = JSON.stringify({
      cidVersion: 0,
    });
    metaData.append("pinataOptions", options1);

    // pin the metadata to pinata

    const metadataResult = await axios({
      method: "post",
      url: "https://api.pinata.cloud/pinning/pinJSONToIPFS",
      data: metaData,
      headers: {
        pinata_api_key: `${VITE_PINATA_API_KEY}`,
        pinata_secret_api_key: `${VITE_PINATA_SECRET_KEY}`,
        "Content-Type": "application/json",
      },
    });

    console.log(
      `https://gateway.pinata.cloud/ipfs/${metadataResult.data.IpfsHash}`
    );
    // Return the direct metadata URL
    return `https://gateway.pinata.cloud/ipfs/${metadataResult.data.IpfsHash}`;
  } catch (error) {
    console.log(error);
  }
};
