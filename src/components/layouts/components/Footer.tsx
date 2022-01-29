import React from "react";
import { AFEN_SVGS } from "../../constants";
import {
  FOOTER_LINKS,
  FOOTER_SOCIAL_MEDIA,
  SECONDARY_FOOTER_LINKS,
} from "../constants";

const { AfenLogo } = AFEN_SVGS;

const Footer = () => {
  return (
    <footer className="bg-[#E8E8E8] pt-10 pb-6">
      <div className="max-width-full text-afen-ash flex flex-col gap-9 px-5">
        <section className="flex justify-between">
          <div className="space-y-10 max-w-[35rem] border-2">
            <h4 className="text-xl font-medium">Afen Group</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae
              venenatis aliquam enim, in nisl.
            </p>
            <div className="flex ">
              <input
                type="text"
                className="py-2 px-6 rounded-l-xl min-w-[26rem] border-2 border-transparent "
                placeholder="Your email address"
              />
              <button className="font-medium px-4 bg-afen-yellow rounded-r-xl">
                Sign up
              </button>
            </div>
          </div>
          <div className="max-w-[20rem]">
            <AfenLogo style={{ width: 90, height: 100 }} />
            <p>
              A leading hub for African Blockchain-related collaborations with a
              focus on Decentralized Finance, Arts, Real Estate and Education.
            </p>
          </div>
          <div className="flex gap-20">
            {FOOTER_LINKS.map(({ title, links }) => (
              <div key={title} className="flex flex-col gap-4">
                <h3 className="font-bold">{title}</h3>
                {links.map(({ name }) => (
                  <p
                    key={name}
                    className="cursor-pointer transform hover:translate-x-1 duration-500 transition-all"
                  >
                    {name}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </section>
        <div className="border-b border-afen-ash "></div>
        <section className="flex items-center justify-between">
          <div className="flex gap-8">
            {SECONDARY_FOOTER_LINKS.map(({ name }) => (
              <p key={name}>{name}</p>
            ))}
          </div>
          <div className="flex items-center gap-6">
            {FOOTER_SOCIAL_MEDIA.map((Social, index) => (
              <Social
                className="cursor-pointer transform hover:-translate-y-1 duration-500 transition-all"
                key={index}
                style={{ width: 16, height: 16 }}
              />
            ))}
          </div>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
