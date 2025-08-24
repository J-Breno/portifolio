import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";

export const contactSchema = z.object({
  name: z.string().min(1, "O nome é obrigatório"),
  phone: z.string().min(8, "Informe um número válido"),
  email: z.string().email("E-mail inválido"),
  message: z.string().min(10, "A mensagem não pode ser vazia"),
});

export type ContactFormData = z.infer<typeof contactSchema>;

export default function Contact() {

    const {
    register,
    handleSubmit,
    reset, 
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  async function onSubmit(data: ContactFormData) {
    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Erro ao enviar mensagem");

       toast.success("Mensagem enviada com sucesso!");

       reset();
    } catch (err) {
      console.error(err);
      toast.error("Erro ao enviar. Tente novamente.");
    }
  }


    return (
        <>
        <section id="contact" className="w-full">
                  <div className="h-[60px] flex items-center px-4 bg-gradient-to-r from-black/95 to-transparent">
                    <h2 className="text-4xl font-bold text-white">Contato</h2>
                  </div>
                   <div className="flex flex-col items-center mt-24">
                        <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="w-full max-w-[840px] min-h-[480px] bg-[rgba(43,44,68,1)] rounded-lg p-8 flex flex-col gap-6 text-white"
                        >
                            <p className="text-lg font-medium">Envie uma mensagem:</p>

                            {/* Nome e Telefone */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                <Input
                                    placeholder="Nome*"
                                    {...register("name")}
                                    className="w-full h-[35px] bg-white text-black"
                                />
                                {errors.name && (
                                    <p className="text-red-400 text-sm">{errors.name.message}</p>
                                )}
                                </div>

                                <div>
                                <Input
                                    placeholder="Número do celular"
                                    {...register("phone")}
                                    className="w-full h-[35px] bg-white text-black"
                                />
                                {errors.phone && (
                                    <p className="text-red-400 text-sm">{errors.phone.message}</p>
                                )}
                                </div>
                            </div>

                            {/* Email */}
                            <div>
                                <Input
                                placeholder="E-mail"
                                type="email"
                                {...register("email")}
                                className="w-full h-[35px] bg-white text-black"
                                />
                                {errors.email && (
                                <p className="text-red-400 text-sm">{errors.email.message}</p>
                                )}
                            </div>

                            {/* Mensagem */}
                            <div>
                                <Textarea
                                placeholder="Escreva sua mensagem..."
                                {...register("message")}
                                className="w-full h-[220px] bg-white text-black resize-none"
                                />
                                {errors.message && (
                                <p className="text-red-400 text-sm">{errors.message.message}</p>
                                )}
                            </div>

                            {/* Botão */}
                            <div className="flex justify-center">
                                <Button type="submit" disabled={isSubmitting} className="w-[210px] h-[40px] bg-[rgba(68,146,37,1)] text-white text-[16px] font-semibold rounded-md hover:bg-[#255811]" >
                                    {isSubmitting ? "Enviando..." : "ENVIAR MENSAGEM"}
                                </Button>
                            </div>
                        </form>
                    </div>

                </section>
        </>
    )
}